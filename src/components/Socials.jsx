import { FaInstagram, FaFacebookF, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const socials = [
  {
    name: 'Instagram',
    icon: <FaInstagram />, 
    url: 'https://www.instagram.com/smakeup1719?igsh=MWV5OGJzMXJsNXI0cw==',
    color: 'from-pink-400 to-yellow-300',
  },
  {
    name: 'Facebook',
    icon: <FaFacebookF />, 
    url: 'https://facebook.com/',
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'WhatsApp',
    icon: <FaWhatsapp />, 
    url: 'https://wa.me/9320387216/',
    color: 'from-green-400 to-green-600',
  },
  {
    name: 'Email',
    icon: <FaEnvelope />, 
    url: 'mailto:nehamakeup01@gmail.com',
    color: 'from-purple-400 to-pink-400',
  },
];

const Socials = () => (
  <section className="relative py-20 overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-blue-50 dark:from-black dark:via-gray-900 dark:to-black"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_60%_40%,rgba(255,182,193,0.08),transparent_60%)] dark:bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.05),transparent_50%)]"></div>
    <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
          <span className="bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Connect with Me
          </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-xl mx-auto">
          Follow, message, or email for bookings, collaborations, and updates.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {socials.map((social, idx) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={`group w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-2xl bg-gradient-to-br ${social.color} dark:from-white/10 dark:to-white/5 shadow-xl hover:scale-110 transition-transform duration-300`}
          >
            <span className="text-3xl sm:text-4xl text-white dark:text-white group-hover:scale-125 transition-transform duration-300">
              {social.icon}
            </span>
          </a>
        ))}
      </div>
      <div className="mt-12 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Styled by Neha. All rights reserved.
      </div>
    </div>
  </section>
);

export default Socials; 