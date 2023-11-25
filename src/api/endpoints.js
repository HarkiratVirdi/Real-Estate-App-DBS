const endpoints = {
  staff: {
    allStaff: () => 'api/staff',
    updateStaff: (id) => `api/staff/updateStaff/${id}`,
  },
  branch: {
    getAllBranches: () => 'api/branch',
    getBranch: (branchId) => `api/branch/${branchId}`,
  },
  client: {
    getClients: () => 'api/client',
    updateClient: (id) => `/api/client/updateClient/${id}`,
    addClient: () => '/api/client/addClient',
  },
};

export default endpoints;
