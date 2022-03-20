/**
 * Convierte una array de objetos en un objeto de claves - valores.
 * Ejemplo, de un array de personas:
 * const personas = [
 *      {id: 123, nombre: "dave", edad: 23},
 *      {id: 456, nombre: "chris", edad: 23},
 *      {id: 789, nombre: "bob", edad: 23 }
 * ];
 *
 * A el objeto:
 *
 * const personas = {
 *      "123": {id: 123, name: "dave", age: 23},
 *      "456": {id: 456, name: "chris", age: 23},
 *      "789": {id : 789, nombre: "bob", edad: 23}
 * };
 *
 * @param {Array} array         Array de datos
 * @param {String} keyField     Cadena de la clave
 * @param {Boolean} [unique]    Si los datos en la array son o no únicos
 *
 */
const arrayToObject = (array = [], keyField, unique = false) => {

    function groupBy(array, keyField) {
        return array.reduce(function (accumulator, object) {
            // Obtiene el valor del objeto para usar como 
            // la clave de la array al agrupar.
            const key = object[keyField];
            // Si el valor actual es similar a la clave,
            // no acumula la array transformada y la deje vacía.
            if (!accumulator[key]) {
                accumulator[key] = [];
            }
            // Agrega el valor a la array
            accumulator[key].push(object);
            // Devuelve la array transformada
            return accumulator;
            // Se establece el valor inicial de reduce() a un objeto vacío
        }, {});
    }

    return array.reduce((obj, item) => {
        // Si es una array puede darse el caso que los datos sean los
        // mismos. Si se indica que no sean datos únicos, se agruparan
        if (!unique && obj[item[keyField]]) {
            return groupBy(array, keyField);
        }
        // Es un objeto
        obj[item[keyField]] = item;
        return obj;
    }, {});
};

export default arrayToObject;