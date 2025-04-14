/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

console.log('MONGODB_URI', MONGODB_URI);


if (!MONGODB_URI) {
  console.log('الرجاء تحديد MONGODB_URI في ملف البيئة .env.local');
  
  throw new Error('الرجاء تحديد MONGODB_URI في ملف البيئة .env.local');
}

// كاش لتفادي إعادة الاتصال في كل ريكويست (في dev mode)
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

let cached: MongooseCache = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
