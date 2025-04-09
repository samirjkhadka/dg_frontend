import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CEO, TechCorp',
    image: '/images/testimonials/person1.jpg',
    content:
      'Digihub transformed our business with their innovative web solution. Their teams expertise and dedication were exceptional.',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'CTO, InnovateX',
    image: '/images/testimonials/person2.jpg',
    content:
      'Working with Digihub was a game-changer for our mobile app development. They delivered beyond our expectations.',
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Founder, StartupHub',
    image: '/images/testimonials/person3.jpg',
    content:
      'The AI solution provided by Digihub helped us automate our processes and increase efficiency by 200%.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 