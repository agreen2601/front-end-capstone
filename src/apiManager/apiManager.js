const remoteURL = "http://localhost:5001";

export default {
  getAssignments() {
    return fetch(
      `${remoteURL}/assignments/?_expand=route&_expand=vehicle&_expand=driver&_expand=date`
    ).then(result => result.json());
  },
  getAssignmentById(id) {
    return fetch(
      `${remoteURL}/assignments/${id}?_expand=route&_expand=vehicle&_expand=driver&_expand=date`
    ).then(result => result.json());
  },
  getAssignmentsByDateRoute(dateId, routeId) {
    return fetch(
      `${remoteURL}/assignments?dateId=${dateId}&routeId=${routeId}&_expand=driver&_expand=vehicle`
    ).then(result => result.json());
  },
  getAssignmentByDateRouteDriver(dateId, routeId, driverId) {
    return fetch(
      `${remoteURL}/assignments/?dateId=${dateId}&routeId=${routeId}&driverId=${driverId}&_expand=driver&_expand=vehicle`
    ).then(result => result.json());
  },
  getType(type) {
    return fetch(`${remoteURL}/${type}?_embed=assignments`).then(result =>
      result.json()
    );
  },
  getTypeWithId(type, id) {
    return fetch(`${remoteURL}/${type}/${id}?_embed=assignments`).then(result =>
      result.json()
    );
  },
  getUsers() {
    return fetch(`${remoteURL}/users`).then(result =>
      result.json()
    );
  },
  getFavorites(userId) {
    return fetch(
      `${remoteURL}/favoriteRoutes?userId=${userId}&_expand=route`
    ).then(result => result.json());
  },
  addType(type, newType) {
    return fetch(`${remoteURL}/${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newType)
    }).then(data => data.json());
  },
  updateType(type, editedType) {
    return fetch(`${remoteURL}/${type}/${editedType.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedType)
    }).then(data => data.json());
  },
  deleteTypeWithId(type, id) {
    return fetch(`${remoteURL}/${type}/${id}`, {
      method: "DELETE"
    }).then(result => result.json);
  }
};
