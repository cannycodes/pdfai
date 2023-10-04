
import {pgTable, text, serial, integer, varchar, timestamp, pgEnum} from 'drizzle-orm/pg-core'
export const roleenum = pgEnum('role', ['user', 'system']);

export const chats = pgTable('chats',{
id: serial('id').primaryKey(),
pdfName: text('pdf_name').notNull(),
pdfUrl: text('pdf_url').notNull(),
createdAt: timestamp('createdAt').notNull().defaultNow(),
userId:varchar('user_id',{length:256}).notNull(),
fileKey: text('file_key').notNull()
})

export const messages = pgTable('messages',{
    id: serial('id').primaryKey(),
    chatId: integer('chat_id').references(()=>chats.id).notNull(),
     content:text('content').notNull(),
     createdAt: timestamp('createdAt').notNull().defaultNow(),
     role: roleenum('roleenum').notNull()
})