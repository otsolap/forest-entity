import TextField from '@/partials/form/TextField';
import TextAreaField from '@/partials/form/TextAreaField';

const getInputField = ({ __component, ...rest  }, index, formRef) => {
  let Input;

  switch (__component) {
    case 'form-inputs.text-field':
      Input = TextField;
    break;
    case 'form-inputs.textarea-field':
      Input = TextAreaField;
    break;
    default:
      console.error(`No component found for: ${__component}`)
      break;
  }

  return Input ? (
    <Input 
        key={`index-${index}`} 
        formRef={formRef}
        {...rest} 
    />
   ) : null;
};

const Inputs = ({ inputs, formRef }) => {
    return inputs.map((input, index) =>
      getInputField(input, index, formRef)
    )
  }

export default Inputs;