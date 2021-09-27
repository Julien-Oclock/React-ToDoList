import React from 'react';
import ToDo from './ToDo'

const ToDoList = ({tasks, match, onToggleCompleted}) => {
    
    let filteredTask;

    switch(match.params.filter){
        case 'completed':
            filteredTask = tasks.filter(task => task.completed)
        break;
        default:
            filteredTask = tasks
    }

    if(filteredTask.length === 0){
        return(
            <>   
                <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                    <li className="list-group-item"> Aucune tâche à afficher</li>
                </ul>
            </>
        );
    
    } else{
        return(
            <>   
                <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                    {
                        filteredTask.map((task) => <ToDo task={task} key={task.id} onToggleCompleted={onToggleCompleted}/>)
                    }
                </ul>
            </>
        );
    }
    

};

export default ToDoList;