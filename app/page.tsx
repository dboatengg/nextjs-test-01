import { prisma } from '@/lib/prisma';
import { createNote, deleteNote } from './actions';

export default async function Home() {
  const notes = await prisma.note.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Notes</h1>

      {/* CREATE */}
      <form action={createNote} className="mb-8 space-y-2">
        <input name="title" placeholder="Title" className="border p-2 w-full" required />
        <textarea name="content" placeholder="Content" className="border p-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Add Note
        </button>
      </form>

      {/* READ & DELETE */}
      <ul className="space-y-2">
        {notes.map((note) => (
          <li key={note.id} className="border p-3 flex justify-between">
            <div>
              <h2 className="font-semibold">{note.title}</h2>
              <p className="text-gray-600">{note.content}</p>
            </div>
            <form action={deleteNote.bind(null, note.id)}>
              <button type="submit" className="text-red-500">Delete</button>
            </form>
          </li>
        ))}
      </ul>
    </main>
  );
}