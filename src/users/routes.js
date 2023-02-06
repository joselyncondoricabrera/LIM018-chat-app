const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// router.get('/', (req, res) => {
//   res.send('using api route');
// });

router.get('/', controller.getUsers);

router.get('/:id', controller.getUserById);

router.post('/', controller.addUsers);

router.delete('/:id', controller.removeUsers);

router.put('/:id', controller.putUsers);

module.exports = router;
