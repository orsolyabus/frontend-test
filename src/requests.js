export const Workstation = {
  all() {
    return fetch(`${process.env.REACT_APP_BACKEND_API}/workstations?include=users`, {
    }).then(res => res.json());
  },
  one(id) {
    return fetch(`${process.env.REACT_APP_BACKEND_API}/workstations/${id}?include=users`, {
    }).then(res => res.json());
  },
};