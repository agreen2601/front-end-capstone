const remoteURL = "http://localhost:5001";

export default {
  getAssignments() {
    return fetch(`${remoteURL}/assignments/?_expand=route&_expand=vehicle&_expand=driver&_expand=date`).then(result =>
      result.json()
    );
  },
  getType(type) {
    return fetch(`${remoteURL}/${type}?_embed=assignments`).then(result =>
      result.json()
    );
  },
  getAssignmentsByDateExpanded(id) {
    return fetch(`${remoteURL}/assignments?dateId=${id}&_expand=driver&_expand=vehicle`).then(result =>
      result.json()
    );
  },
  getItemByDateRouteDriver(dateId, routeId, driverId) {
    return fetch(`${remoteURL}/assignments/?dateId=${dateId}&routeId=${routeId}&driverId=${driverId}&_expand=driver&_expand=vehicle`).then(result =>
      result.json()
    );
  },
  getTypeWithId(type, id) {
    return fetch(`${remoteURL}/${type}/${id}?_embed=assignments`).then(result =>
        result.json()
      );
  },
  addType(type, newType) {
    return fetch(`${remoteURL}/${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newType)
    }).then(data => data.json());
  }
};
