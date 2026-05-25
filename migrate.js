const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// ✅ তোমার MongoDB URI দাও
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/your-db-name';

async function migrate() {
  await mongoose.connect(MONGO_URI);
  console.log('✅ MongoDB connected');

  const db = mongoose.connection.db;
  const collection = db.collection('events');

  const docs = await collection.find({}).toArray();
  console.log(`📦 Total documents found: ${docs.length}`);

  let updated = 0;
  let skipped = 0;

  for (const doc of docs) {
    const updateFields = {};
    const unsetFields = {};

    // id না থাকলে UUID add করো
    if (!doc.id) {
      updateFields.id = uuidv4();
    }

    // __v থাকলে remove করো
    if (doc.__v !== undefined) {
      unsetFields.__v = '';
    }

    const hasUpdate = Object.keys(updateFields).length > 0;
    const hasUnset = Object.keys(unsetFields).length > 0;

    if (!hasUpdate && !hasUnset) {
      skipped++;
      continue;
    }

    const updateQuery = {};
    if (hasUpdate) updateQuery.$set = updateFields;
    if (hasUnset) updateQuery.$unset = unsetFields;

    await collection.updateOne({ _id: doc._id }, updateQuery);
    updated++;
    console.log(`✔ Updated: ${doc.title || doc._id}`);
  }

  console.log(`\n🎉 Migration complete!`);
  console.log(`   Updated : ${updated}`);
  console.log(`   Skipped : ${skipped} (already up to date)`);

  await mongoose.disconnect();
  process.exit(0);
}

migrate().catch(err => {
  console.error('❌ Migration failed:', err);
  process.exit(1);
});
