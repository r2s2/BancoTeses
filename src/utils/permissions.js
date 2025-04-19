export const permissions = {
    admin: {
        canCreate: true,
        canEdit: true,
        canView: true,
    },
    editor: {
        canCreate: false,
        canEdit: true,
        canView: true,
    },
    viewer: {
        canCreate: false,
        canEdit: false,
        canView: true,
    },
};

/**
 * Check if a user has a specific permission based on their role
 * @param {string} role - The user's role (admin, editor, viewer)
 * @param {string} permission - The permission to check
 * @returns {boolean} - Whether the user has the permission
 */
export const checkPermission = (role, permission) => {
  // Define role-based permissions
  const permissions = {
    admin: ['canCreate', 'canEdit', 'canDelete', 'canView'],
    editor: ['canCreate', 'canEdit', 'canView'],
    viewer: ['canView']
  };

  // If role doesn't exist or permission mapping doesn't exist, deny permission
  if (!role || !permissions[role]) {
    return false;
  }

  // Check if the role has the requested permission
  return permissions[role].includes(permission);
};