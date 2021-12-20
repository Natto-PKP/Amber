import dotenv from 'dotenv';
dotenv.config();

/** Sucrose */
import { Sucrose } from './structures/sucrose';

new Sucrose({ intents: 14319, partials: ['CHANNEL'] });
