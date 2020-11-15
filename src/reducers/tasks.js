function tasksReducer( tasks = [ 
    {
        name: 'Test Task 1',
        organization: 'Text Org 1'
    },
    {
        name: 'Test Task 2',
        organization: 'Text Org 2'
    },
    {
        name: 'Test Task 3',
        organization: 'Text Org 3'
    },
], action ) {
    return tasks;
}

export { tasksReducer }