import React, { useEffect } from "react";
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import { Button, Col, Card, Form, Input, Row, Space } from "antd";
// import { connect } from 'dva';

// import { formatMessage, FormattedMessage } from "umi-plugin-react/locale";

import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

// NEW
// const formItemLayout = {
//   labelCol: {
//     xs: { span: 24 },
//     sm: { span: 4 },
//   },
//   wrapperCol: {
//     xs: { span: 24 },
//     sm: { span: 20 },
//   },
// };
// const formItemLayoutWithOutLabel = {
//   wrapperCol: {
//     xs: { span: 24, offset: 0 },
//     sm: { span: 20, offset: 4 },
//   },
// };
// NEW ENDS

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const layout2 = {
  // labelCol: { span: 8 },
  wrapperCol: { offset: 8,span: 16 },
};

const layout3 = {
  // labelCol: { span: 12 },
  // wrapperCol: { span: 12  },
  wrapperCol: { offset: 6, span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const FormList = () => {
  const [form] = Form.useForm();

  const onSubmit = () => {
    form.submit();
  };
  useEffect(() => {}, []);

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  // console.log(form)

  return (
    <Form
      form={form}
      onFinish={onFinish}
      {...layout}
      className="form-list--color"
    >
      <PageHeaderWrapper
      // content={formatMessage({ id: "feature-new.page-header-content" })}
      >
        <Card bordered={false}>
          <Row>
            <Col span={16}>
              <Form.Item
                label="Some label"
                name="name"
                rules={[
                  {
                    required: true,
                    // message: formatMessage({
                    //   id: "feature-new.form.name.required-error",
                    // }),
                  },
                ]}
              >
                <Input
                // placeholder={formatMessage({
                //   id: "feature-new.form.name.placeholder",
                // })}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={16}>
              <Form.List
                name="featureOption"
                rules={[
                  {
                    validator: async (_, featureOption) => {
                      if (!featureOption) {
                        return Promise.reject(
                          new Error(
                            "Proszę wpisać przynajmniej jedną opcję cechy"
                          )
                        );
                      }
                    },
                  },
                ]}
              >
                {(fields, { add, remove }, {errors}) => (
                  <>
                    {fields.map((field, index) => (
                      <Form.Item
                        label="Opcja cechy"
                        required={false}
                        key={field.key}
                        
                      >
                        <Form.Item
                          {...field}
                          validateTrigger={["onChange", "onBlur"]}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message: "Proszę uzupełnić opcję cechy.",
                            },
                          ]}
                          noStyle
                        >
                          <Input
                            
                          />
                        </Form.Item>
                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            onClick={() => remove(field.name)}
                          />
                        ) : null}
                      </Form.Item>
                    ))}
                    <Form.Item
                      
                      {...tailLayout}
                    >
                      <Button
                        
                        type="dashed"
                        onClick={() => add()}
                        style={{ width: "100%" }}
                        icon={<PlusOutlined />}
                      >
                        Dodaj opcję cechy
                      </Button>

                      <Form.ErrorList errors={errors} />
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Col>
          </Row>

          <Row>
            <Col span={16}>
              <Form.Item {...tailLayout}>
                <Button type="primary" onClick={onSubmit}>
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </PageHeaderWrapper>
    </Form>
  );
};

export default FormList;
