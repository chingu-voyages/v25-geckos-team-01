function tasksReducer( tasks = [ 
    {
        name: 'Test Task 1',
        organization: 'Test Org 1',
        description: 'This is the task description',
    },
    {
        name: 'Test Task 2',
        organization: 'Test Org 2',
        description: 'This is the task description',
    },
    {
        name: 'Test Task 3',
        organization: 'Test Org 3',
        description: 'This is the task description',
    },
], action ) {
    return tasks;
}

export { tasksReducer }