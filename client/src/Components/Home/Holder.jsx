import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row, Dropdown, Form } from "react-bootstrap";
import styles from "../../assets/variables/styles";

function CustomSearch() {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );

  return (
    <Col>
      <h1 style={styles.color.primary}>Home</h1>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          Custom toggle
        </Dropdown.Toggle>

        <Dropdown.Menu as={CustomMenu}>
          <Dropdown.Item eventKey="1">Red</Dropdown.Item>
          <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Orange
          </Dropdown.Item>
          <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
  );
}

function Holder() {
  useEffect(() => {
    document.title = "Home - ABA";
  }, []);

  return (
    <Container fluid>
      <CustomSearch />

      <Row>
        <Col
          style={{
            ...styles.padding.half,
            ...styles.color.dark,
            ...styles.text.weight.small,
            ...styles.text.align.justify,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          incidunt adipisci aspernatur? Doloribus corrupti ipsa magnam labore
          repellendus accusantium a mollitia officia atque delectus quas dolor
          laudantium facilis deleniti sequi, qui maxime libero similique
          veritatis distinctio quaerat! Nisi tempora, soluta saepe sit ut
          explicabo iste reiciendis consectetur, impedit repudiandae dolorem
          sunt nobis tenetur laboriosam nulla itaque praesentium facilis
          commodi, similique accusamus atque omnis libero neque dolor. Rerum,
          laudantium est. Voluptatum alias iure, incidunt fugiat corrupti rem
          delectus nostrum quia itaque ad, facilis necessitatibus vitae animi
          ab. Delectus molestiae eius, aspernatur omnis assumenda et nemo
          officia exercitationem quasi dicta alias ad vitae iure culpa id atque!
          Perspiciatis, pariatur sint! Molestias, corporis maxime omnis ex
          repudiandae deleniti rerum quibusdam eos ipsam accusantium. Iusto
          expedita quod incidunt molestias odit ducimus quam rerum nemo
          molestiae quasi sapiente optio alias maxime, ea blanditiis, voluptate
          tenetur quidem vitae, quisquam dicta quos accusamus repudiandae
          excepturi. Fuga maiores nostrum a mollitia error repellendus ratione
          omnis obcaecati quidem quis, dolore, repellat accusamus, explicabo
          quam aliquam debitis id itaque in cum unde aspernatur! Ut officia
          debitis nostrum a quam accusantium, consequatur dignissimos voluptate
          corporis amet accusamus numquam, quos distinctio incidunt
          necessitatibus fuga harum porro minus est cumque expedita deleniti.
          Quam!
        </Col>

        <Col
          style={{
            ...styles.padding.half,
            ...styles.color.danger,
            ...styles.text.weight.small,
            ...styles.text.align.justify,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
          nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
          sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae,
          consequat in, pretium a, enim. Pellentesque congue. Ut in risus
          volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
          Praesent egestas leo in pede. Praesent blandit odio eu enim.
          Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum.
          Maecenas adipiscing ante non diam sodales hendrerit.
        </Col>

        <Col
          style={{
            ...styles.padding.half,
            ...styles.color.dark,
            ...styles.text.weight.small,
            ...styles.text.align.justify,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          voluptatem inventore et ex rem dolores qui nihil natus quasi ratione
          iure, fuga odio soluta veniam harum, maiores maxime? Ad est aliquam
          laudantium, necessitatibus eveniet id ut quae distinctio aspernatur
          quod. Necessitatibus quisquam quam laboriosam corrupti aut. Qui
          pariatur, expedita repellat minima ipsum nam facere reiciendis sint
          itaque officiis quisquam, amet dicta adipisci dolor ad eaque similique
          mollitia aspernatur accusantium voluptate!
        </Col>
      </Row>
    </Container>
  );
}

export default Holder;
