const endpoints = {
  staff: {
    allStaff: () => 'api/staff',
    updateStaff: (id) => `api/staff/updateStaff/${id}`,
  },
  branch: {
    getAllBranches: () => 'api/branch',
    getBranch: (branchId) => `api/branch/${branchId}`,
    updateBranch: (branchId) => `api/branch/${branchId}`,
    addBranch: () => 'api/branch/addBranch',
  },
  client: {
    getClients: () => 'api/client',
    addClient: () => 'api/client/addClient',
    updateClient: (id) => `api/client/updateClient/${id}`,
  },
};

export default endpoints;
