import React from 'react'

const page = () => {
  return (
    <div>Parallel Routes allows you to simultaneously or conditionally render one or more pages within the same layout. They are useful for highly dynamic sections of an app, such as dashboards and feeds on social sites.
<br />
    For example, considering a dashboard, you can use parallel routes to simultaneously render the team and analytics pages
    <br />
    <div>
    Slots:
    Parallel routes are created using named slots. Slots are defined with the @folder convention. For example, the following file structure defines two slots: @route1 and @route2
    </div>
    </div>
    
  )
}

export default page