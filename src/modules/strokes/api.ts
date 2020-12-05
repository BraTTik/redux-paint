export const getProject = (id : string) => 
    fetch(`http://localhost:4000/projects/${id}`).then(res => res.json());