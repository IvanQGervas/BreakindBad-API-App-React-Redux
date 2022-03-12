/**
 * Convierte una array de objetos en un objeto de claves - valores
 * Ejemplo, de la matriz de personas:
 * const personas = [
 *      {id: 123, nombre: "dave", edad: 23},
 *      {id: 456, nombre: "chris", edad: 23},
 *      {id: 789, nombre: "bob", edad: 23 }
 * ];
 *
 * a el objeto:
 *
 * const personas = {
 *      "123": {id: 123, name: "dave", age: 23},
 *      "456": {id: 456, name: "chris", age: 23},
 *      "789": {id : 789, nombre: "bob", edad: 23}
 * };
 *
 * @param {Array} array         Matriz de datos
 * @param {String} keyField     Cadena de la clave
 * @param {Function} validator  Función validadora
 * @param {Boolean} [unique]    Si los datos en la matriz son o no únicos
 *
 */

 const arrayToObject = (array = [], keyField, validator, unique = false) => {

    function groupBy(array, keyField) {
        return array.reduce(function (accumulator, object) {
            // obtiene el valor del objeto para usar como la clave de la matriz
            // al agrupar
            const key = object[keyField];
            // si el valor actual es similar a la clave, no acumula la matriz
            // transformada y la deje vacía
            if (!accumulator[key]) {
                accumulator[key] = [];
            }
            // agrega el valor a la matriz
            accumulator[key].push(object);
            // devuelve la matriz transformada
            return accumulator;
            // Se establece el valor inicial de reduce() a un objeto vacío
        }, {});
    }

    let valid;

    return array.reduce((obj, item) => {
        // Si tiene o no función validadora para el dato
        valid = validator && typeof validator === 'function'
            ? validator(item)
            : true;
        if (valid) {
            // Si es una matriz puede darse el caso que los datos sean los
            // mismos. Si se indica que no sean datos únicos, se agruparan
            if (!unique && obj[item[keyField]]) {
                return groupBy(array, keyField);
            }
            // Es un objeto
            obj[item[keyField]] = item;
        }
        return obj;
    }, {});
};

export default arrayToObject;