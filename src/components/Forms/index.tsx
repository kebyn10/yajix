import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Box, Button, TextField } from '@mui/material';

interface FieldConfig {
  name: string;
  label: string;
  type: string;
  variant: "outlined" | "filled" | "standard";
}

interface ReusableFormProps {
  initialValues: Record<string, any>;
  validationSchema: object;
  onSubmit: (values: Record<string, any>) => void;
  fields: FieldConfig[];
  styles?: { formStyle: object; inputsStyle: object };
}

const ReusableForm: React.FC<ReusableFormProps> = ({
  initialValues,
  validationSchema,
  onSubmit,
  fields,
  styles
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log('Form values', values);
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form style={styles?.formStyle}>
          {fields.map((field, index) => (
            <Box key={index}>
              <Field name={field.name}>
                {({ field: formikField, meta }: any) => (
                  <TextField
                    {...formikField}
                    style={styles?.inputsStyle}
                    type={field.type}
                    label={field.label}
                    variant={field.variant}
                    error={meta.touched && Boolean(meta.error)}
                    helperText={meta.touched && meta.error}
                    fullWidth
                  />
                )}
              </Field>
              <ErrorMessage name={field.name} component="div" />
            </Box>
          ))}
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ReusableForm;
