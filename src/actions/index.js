export const ERROR_ALERT = 'ERROR_ALERT';


export function adicionarMessagemErro(payload) {
    return {
        type: ERROR_ALERT,
        payload
    };
}