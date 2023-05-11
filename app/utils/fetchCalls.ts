export const fetchAll = () => {
    return fetch('http://localhost:8080/api/puppies')
      .then(response => response.json())
}
