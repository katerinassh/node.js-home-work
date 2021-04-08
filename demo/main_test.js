import test_task1 from './src/tests/test_task1.js';
import test_task2 from './src/tests/test_task2.js';
import test_task3 from './src/tests/test_task3.js';
import test_task4 from './src/tests/test_task4.js';
import test_task5 from './src/tests/test_task5.js';
import test_task6 from './src/tests/test_task6.js';
import test_task7 from './src/tests/test_task7.js';

mocha.setup('bdd');

test_task1();
test_task2();
test_task3();
test_task4();
test_task5();
test_task6();
test_task7();

//START
mocha.run();