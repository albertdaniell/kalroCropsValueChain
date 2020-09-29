import React from 'react'

function AppLogo(props) {
    return (
        <div id="appLogoDiv" style={{}}>
            <a id="appLogo" style={{}} href={props.to}>{props.appName}</a>
        </div>
    )
}

export default AppLogo
