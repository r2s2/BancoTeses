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

export const checkPermission = (role, action) => {
    if (permissions[role]) {
        return permissions[role][action] || false;
    }
    return false;
};