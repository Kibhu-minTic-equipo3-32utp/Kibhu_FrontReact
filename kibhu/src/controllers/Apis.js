const server = "https://backendkibhu.herokuapp.com";

// LOGIN

const apiLogin = `${server}/auth`;

//CLIENTES

const apiClient = `${server}/clients`;

const apiSingleClient = `${apiClient}/:identification`;

const apiCountedClient = `${server}/countedclients`;

const apiSortedClient = `${server}/sortedclients`;

// PROVEEDORES

const apiSuplier = `${server}/supliers`;

const apiSingleSuplier = `${apiSuplier}/:ruc`;

const apiCountedSuplier = `${server}/countedsupliers`;

const apiSortedSuplier = `${server}/sortedsupliers`;

// USUARIOS

const apiUser = `${server}/users`;

const apiSingleUser = `${apiUser}/:identification`;

const apiCountedUser = `${server}/countedusers`;

const apiSortedUser = `${server}/sortedusers`;

// PRODUCTOS

const apiProduct = `${server}/products`;

const apiSingleProduct = `${apiProduct}/:reference`;

const apiCountedProduct = `${server}/countedproducts`;

const apiSortedProduct = `${server}/sortedproducts`;

export {
  apiClient,
  apiSingleClient,
  apiLogin,
  apiCountedClient,
  apiSortedClient,
  apiSingleSuplier,
  apiCountedSuplier,
  apiSortedSuplier,
  apiSuplier,
  apiUser,
  apiSingleUser,
  apiCountedUser,
  apiSortedUser,
  apiProduct,
  apiSingleProduct,
  apiCountedProduct,
  apiSortedProduct,
};
