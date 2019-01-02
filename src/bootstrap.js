export default function bootstrap(orm) {
    // Get the empty state according to our schema.
    const state = orm.getEmptyState();

    // Begin a mutating session with that state.
    // `state` will be mutated.
    const session = orm.mutableSession(state);

    // Model classes are available as properties of the
    // Session instance.
    const { Todo, Tag, User } = session;

    // Start by creating entities whose props are not dependent
    // on others.
    const user = User.create({
        id: 0, // optional. If omitted, Redux-ORM uses a number sequence starting from 0.
        name: 'Chris',
    });
    const otherUser = User.create({
        id: 1, // optional.
        name: 'Eric',
    });

    // Tags to start with.
    const work = Tag.create({ name: 'work' });
    const personal = Tag.create({ name: 'personal' });
    const urgent = Tag.create({ name: 'urgent' });
    const chore = Tag.create({ name: 'chore' });

    // Todo's for `user`
    Todo.create({
        text: 'Create a React App',
        user,
        tags: [work], // We could also pass ids instead of the Tag instances.
    });
    Todo.create({
        text: 'Attend meeting',
        user,
        tags: [work],
    });
    Todo.create({
        text: 'Pay bills',
        user,
        tags: [personal, urgent],
    });

    // Todo's for `otherUser`
    Todo.create({
        text: 'Research',
        user: otherUser,
        tags: [work],
    });
    Todo.create({
        text: 'Fix the washing machine',
        user: otherUser,
        tags: [personal, chore],
    });
    Todo.create({
        text: 'Negotiate internet subscription',
        user: otherUser,
        tags: [personal, urgent],
    });

    // Return the whole Redux initial state.
    return {
        orm: state,
        selectedUserId: 0,
    };
}