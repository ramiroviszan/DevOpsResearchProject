export function parseDatabaseError(error) {
    if(error.includes('duplicate key error'))
        return 'Ya existe un proyecto con ese nombre';
    else
        return 'Error al crear proyecto';
}

export function parseBackendError(error) {
    switch (error) {
        case 'Invalid project':
            return "Proyecto inválido";

        case 'Invalid company':
            return "Empresa inválida";

        default:
            return parseDatabaseError(error);
    }
}