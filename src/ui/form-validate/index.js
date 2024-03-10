/* Использование:
  установить бибилиотеку validate.js
  npm i --save-dev validate.js
  установить бибилиотеку underscore
  npm i --save-dev underscore

  добавить подключение в основной файл script.js
  //=include ../ui/form-validate/index.js
  const formsList = document.querySelectorAll('.validate-form');
  formValidate(formsList);

  добавить подключение в основной файл script.js или в отдельный файл библиотек  
  //=include "../../../node_modules/imask/dist/imask.min.js"
  //=include "../../../node_modules/underscore/underscore-min.js"

*/

function formValidate(elements) {

  const constraints = {
    email: {
      presence: true,
      email: true
    },
    name: {
      presence: true,
      length: {
        minimum: 2,
        maximum: 20,
        message: "can contain 2-20 symbols"
      },
      format: {
        pattern: "[a-z]+",
        flags: "i",
        message: "can only contain a-z"
      }
    },
    phone: {
      presence: true,
      length: {
        minimum: 18,
        maximum: 18,
        message: "format +7 (000) 000-00-00"
      },
    },
  };

  if (elements.length !== 0) {

    elements.forEach(form => {
      form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        handleFormSubmit(form);
      });

      let inputs = form.querySelectorAll("input, textarea, select")
      for (var i = 0; i < inputs.length; ++i) {
        inputs.item(i).addEventListener("change", function(ev) {
          let errors = validate(form, constraints) || {};
          showErrorsForInput(this, errors[this.name])
        });
      }
    });

    function handleFormSubmit(form) {
      // validate the form against the constraints
      var errors = validate(form, constraints);
      // then we update the form to reflect the results
      showErrors(form, errors || {});
      if (!errors) {
        showSuccess();
      }
    }

    // Updates the inputs with the validation errors
    function showErrors(form, errors) {
      // We loop through all the inputs and show the errors for that input
      _.each(form.querySelectorAll("input[name], select[name]"), function(input) {
        // Since the errors can be null if no errors were found we need to handle
        // that
        showErrorsForInput(input, errors && errors[input.name]);
      });
    }

    // Shows the errors for a specific input
    function showErrorsForInput(input, errors) {
      // This is the root of the input
      var formGroup = closestParent(input.parentNode, "input");
      // First we remove any old messages and resets the classes
      resetFormGroup(formGroup);
      // If we have errors
      if (errors) {
        // we first mark the group has having errors
        formGroup.classList.add("input--error");
        // then we append all the errors
        var blockErr = document.createElement("p");
        blockErr.classList.add("input__status");
        formGroup.appendChild(blockErr);
        _.each(errors, function(error) {
          addError(blockErr, error);
        });
      } else {
        // otherwise we simply mark it as success
        formGroup.classList.add("input--success");
      }
    }

    // Recusively finds the closest parent that has the specified class
    function closestParent(child, className) {
      if (!child || child == document) {
        return null;
      }
      if (child.classList.contains(className)) {
        return child;
      } else {
        return closestParent(child.parentNode, className);
      }
    }

    function resetFormGroup(formGroup) {
      // Remove the success and error classes
      formGroup.classList.remove("input--error");
      formGroup.classList.remove("input--success");
      // and remove any old messages
      _.each(formGroup.querySelectorAll(".input__status"), function(el) {
        el.parentNode.removeChild(el);
      });
    }

    // Adds the specified error with the following markup
    function addError(blockErr, error) {
      var block = document.createElement("span");
      block.innerText = error;
      blockErr.appendChild(block);
    }

    function showSuccess() {
      // We made it \:D/
      alert("Success!");
    }
  }  

}