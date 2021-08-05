import React from 'react'
import { useSelector } from 'react-redux'

function InfoBanner() {
    const information = useSelector(state => state.ProjectReducer.projectInfo)
    const {projectName,description} = information
    return (
        <>
        <h1>{projectName}</h1>
        <span>description - {description}</span>
        </>
    )
}

export default InfoBanner
