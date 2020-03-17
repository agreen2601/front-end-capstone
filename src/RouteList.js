import React, { useState, useEffect } from "react";
import RouteCard from "./RouteCard";
import apiManager from "./apiManager/apiManager";

const RouteList = routeListProps => {
    const [assignments, setAssignments] = useState([]);

    const getAndSortAssignmets = () => {
        return apiManager.getAssignments().then(assignmentsFromAPI => {
            assignmentsFromAPI.sort((a,b) => new Date(a.date) -new Date(b.date));
            setAssignments(assignmentsFromAPI);
        });
    };

useEffect(() => {
    getAndSortAssignmets();
}, []);

console.log(assignments[0])

    return (
        <>
          <div>
              {assignments.map(assignment => (
                  <RouteCard
                  key={assignment.id}
                  assignment={assignment}
                  {...routeListProps}
                  />
              ))}
          </div>
        </>
    )
};

export default RouteList