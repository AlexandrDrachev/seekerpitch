import authRoles from '../../services/auth/authRoles';
import ContactUs from './ContactUs';

const contactUs_path = '/contact-us';

const ContactUsConfig = {
  role: authRoles.user,
  path: contactUs_path,
  exact: false,
  component: ContactUs,
};

export default ContactUsConfig;
