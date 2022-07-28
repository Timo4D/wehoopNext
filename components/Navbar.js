import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";

const MyNavbar = () => {
  const { data: session } = useSession();
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">WeHoop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            {!session && <Nav.Link onClick={signIn}>Log In</Nav.Link>}
            {session && (
              <>
                <Nav.Link onClick={signOut}>Logout</Nav.Link>
                <Nav.Link href="/account">{session.user.name}</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
