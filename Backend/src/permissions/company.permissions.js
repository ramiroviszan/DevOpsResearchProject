const companyPermissions = [
    { key: "add-client", value: true },
    { key: "get-all-clients", value: true }
];

module.exports = function (permissionKey) {
    let permissionValue = companyPermissions.find(x => x.key == permissionKey);
    permissionValue = permissionValue == undefined ? false : permissionValue.value;
    return permissionValue;
};