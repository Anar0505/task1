
export async function getAll() {
    const response = await fetch("https://6724a9d7c39fedae05b24389.mockapi.io/selena");
    return await response.json();
  }
  
  export  async function getElementByIdFromApi(id) {
    const response = await fetch(`https://6724a9d7c39fedae05b24389.mockapi.io/selena/${id}`);
    return await response.json();
  }
  
  export async function deleteByIdCategory(id) {
    const response = await fetch(`https://6724a9d7c39fedae05b24389.mockapi.io/selena/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  }
  
  export async function updateByIdCategory(id, obj) {
    const response = await fetch(`https://6724a9d7c39fedae05b24389.mockapi.io/selena/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    return await response.json();
  }
  
  export async function createOneCategory(oby) {
    try {
      const response = await fetch("https://6724a9d7c39fedae05b24389.mockapi.io/selena", {
          method: "POST", 
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(oby),
      });
  } catch (error) {
      console.error("Error sending data:", error);
  }
  }
  
export  function capitalizeText(text) {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}