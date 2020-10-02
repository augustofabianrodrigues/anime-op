import { DireflowComponent } from 'direflow-component';
import App from './components/RoutedApp';

export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: 'anime-op-app',
  },
  plugins: [
    {
      name: 'font-loader',
      options: {
        google: {
          families: ['Poppins'],
        },
      },
    },
  ],
});
