import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { addTaskList, updateTaskList, deleteTaskList} from "../../redux/actions/taskListActions";
import Link from "next/link";

const TaskLists = (props) => {
    const projects = useSelector((state) => state.ProjectReducer);
    const dispatch = useDispatch();

    const [isOver, setIsOver] = useState({
        type: null,
        index: null
    });
    const [isCurrentSelected, setIsCurrentSelected] = useState({
        index: null,
        data: null,
        type: null
    });

    const [isInitialState, setIsInitialState] = useState({
        todo: [
            {
                title: 'task A',
                description: ' Task Description'
            },
            {
                title: 'task B',
                description: ' Task Description'
            },
            {
                title: 'task C',
                description: ' Task Description'
            }
        ],
        progress: [],
        done: [],
        test:[]
    });

    const dragStart = event => {
        const target = event.currentTarget;
        // console.log(event.currentTarget.dataset);

        setIsCurrentSelected({
            index: target.dataset.position,
            type: target.dataset.type,
            data: {
                title: target
                    .getElementsByClassName('list__card-header')[0]
                    .innerText.slice(0, -1),
                description: target.getElementsByClassName('list__card-info')[0]
                    .innerText
            }
        });
        event.dataTransfer.setData("text/html", '');
    };

    const dragOver = event => {
        event.preventDefault();
        // console.log("test", event.currentTarget.dataset.type)
        // const target = event.currentTarget.dataset;
        // if (
        //   target.type === isCurrentSelected.type &&
        //   target.position === isCurrentSelected.index
        // ) {
        //   return;
        // }
        // setIsOver({
        //   type: target.type,
        //   index: Number(target.position)
        // });
        // console.log( Number(evt.currentTarget.dataset.position), evt.currentTarget.dataset.type);
    };

    const dragDrop = event => {
        const target = event.currentTarget.dataset;
        // console.log('test', target);
        if (
            target.type === isCurrentSelected.type &&
            target.position === isCurrentSelected.index
        ) {
            return;
        }
        if (target.position === 'empty') {
            // console.log('test 1', isInitialState);
            isInitialState[isCurrentSelected.type].splice(isCurrentSelected.index, 1);
            // remove task from picked row
            setIsInitialState({
                ...isInitialState,
                [target.type]: [{ ...isCurrentSelected.data }]
            });
            // console.log('test 2', isInitialState);
            return;
        }
        if (target.position === 'delete') {
            isInitialState[isCurrentSelected.type].splice(isCurrentSelected.index, 1);
            // remove task from picked row
            setIsInitialState({
                ...isInitialState,
            });
            return;
        }

        isInitialState[isCurrentSelected.type].splice(isCurrentSelected.index, 1);
        // remove task from picked row

        isInitialState[target.type].splice(Number(target.position), 0, isCurrentSelected.data);
        // add task to selcted tow



        setIsInitialState({
            ...isInitialState,
        });
        // console.log('test', isInitialState);
    };

    return (
        <div className="hero">
            <p>Post: {props.projectid} test</p>
            <div className="row">
                <button onDragOver={dragOver}
                        onDrop={dragDrop}
                        data-position="delete">delete</button>
                <br/><br/>
                <button>add</button>
            </div>
            {projects.map((project) => {
                return (
                    <div>
                        <h1 key={project?._id}>
                            <Link href={`workspace/project/${project?._id}`}>
                                <a>{`${project?.projectName}`}</a>
                            </Link>
                        </h1>
                        <span>by - {project?.projectOwner?.userName}</span>
                        <br />
                        <span>description - {project?.description}</span>
                    </div>
                );
            })}

            <div className="wrapper">
                <ul className="list">
                    { Object.keys(isInitialState).map((list) => {
                        return (<li className="list__cell js-cell" key={list}>
                            <h2>{list}</h2>
                            {isInitialState[list].length ? (
                                isInitialState[list].map((item, index) => {
                                    return (
                                        <div
                                            className={`list__card js-card`}
                                            draggable="true"
                                            onDragStart={dragStart}
                                            onDragOver={dragOver}
                                            onDrop={dragDrop}
                                            data-position={index}
                                            data-type={list}
                                            key={index}
                                        >
                                            <div className="list__card-header">
                                                {item.title} {index}
                                            </div>
                                            <div className="list__card-info">{item.description}</div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div
                                    className="list__card__empty"
                                    onDragOver={dragOver}
                                    onDrop={dragDrop}
                                    data-position="empty"
                                    data-type={list}
                                />
                            )}
                        </li>)
                    })
                    }
                </ul>
            </div>
        </div>
    );
};

export default TaskLists;

