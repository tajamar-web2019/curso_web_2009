# La API de validación de restricciones #

(The constraint validation API)

Disponible en los elementos:

- HTMLButtonElement
- HTMLFieldSetElement
- HTMLInputElement
- HTMLOutputElement
- HTMLSelectElement
- HTMLTextAreaElement

Propiedades

- validationMessage : Un mensaje en el idioma del navegador, que describe la restricción de validación que el control no satisface (si la hay), o el texto vacío si el control no es candidato a restricción de validación (willValidate es false), o el valor del elemento satisface las restricciones

- validity: Un objeto ValidityState que describe el estado de validación del elemento.

- willValidate: Devuelve true si el elemento será validado cuando el formulario es enviado; de lo contrario, devuelve false.

Métodos

- checkValidity()
-setCustomValidity(message)
- HTMLFormElement.reportValidity()

ValidytyState

- validity.customError	Devuelve true si el elemento tiene un error personalizado; de lo contrario, devuelve false.

- validity.patternMismatch	Devuelve true si el valor del elemento no cumple el patrón indicado; de lo contrario, devuelve false. Si devuelve true, el elemento coincide con la pseudo-clase de CSS :invalid.

- validity.rangeOverflow	Devuelve true si el valor del elemento es mayor al máximo permitido; de lo contrario, devuelve false. Si devuelve true, el elemento coincide con las pseudo-clases de CSS :invalid y :out-of-range.

- validity.rangeUnderflow	Devuelve true si el valor del elemento ese menor al mínimo permitido; de lo contrario, devuelve false. Si devuelve true, el elemento coincide con las pseudo-clases de CSS :invalid y :out-of-range.

- validity.stepMismatch	Devuelve true si el valor del elemento no cumple las reglas indicadas por el atributo step; de lo contrario, devuelve false. Si devuelve true, el elemento coincide con las pseudo-clases de CSS :invalid y :out-of-range.

- validity.tooLong	Devuelve true si el valor del elemento es mayor al indicado como longitud máxima; de lo contrario, devuelve false. Si devuelve true, el elemento coincide con las pseudo-clases de CSS :invalid y :out-of-range.

- validity.typeMismatch	Devuelve true si el valor del elemento no tiene la sintaxis correcta; de lo contrario, devuelve false. Si devuelve true, el elemento coincide con la pseudo-clase de CSS :invalid.

- validity.valid	Devuelve true si el valor del elemento no tiene problemas de validación; de lo contrario, devuelve false. Si devuelve true, el elemento coincide con la pseudo-clase de CSS :valid; de lo contrario, coincide con la pseudo-clase :invalid.

- validity.valueMissing	Devuelve true si el elemento no tiene valor pero es un campo requerido; de lo contrario, devuelve false. Si devuelve true, el elemento coincide con la pseudo-clase de CSS :invalid.
