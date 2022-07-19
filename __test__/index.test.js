import Index from '../pages/index';
import { AppProps } from 'next/app'


import "@testing-library/jest-dom";
import { getAllPosts, getPostBySlug } from '../lib/api'

import { render, screen } from '@testing-library/react';
import Layout from '../components/layout';
import LastViewed from '../components/last-viewed';

describe('Rendering Index', () => {
    it('renders the Index Page', () => {
      render(<Index allPosts={[]}/>);
    })

    it('renders with props that is fetched from the local directory', async () => {
      const posts = await getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
      ]);

      render(<Index allPosts={posts} />)
      expect(screen.getByRole("main")).toBeInTheDocument();
    })
  })


  describe('Checking Last Viewed value in the local Storage', () => {
    function setItem(jsonId, newValue){
      let lastViewedArr = [].push(newValue)
      window.localStorage.setItem(jsonId, JSON.stringify(lastViewedArr));
    }
    const localStorageMock = (function() {
      let store = {};
    
      
      return {
        getItem(key) {
          return store[key];
        },
     
        setItem(key, value) {
          store[key] = value;
        },
      
        clear() {
          store = {};
        },
    
        removeItem(key) {
          delete store[key];
        },
         
        getAll() {
          console.log(store);
        }
      };
    })();

    Object.defineProperty(window, 'localStorage', { value: localStorageMock });

    it('sets data into local storage', async () => {
      const jsonId = 'lastViewed';
      const postsBySlug = getAllPosts(['slug'])
      const newJson = postsBySlug[0].slug;


      setItem(jsonId, newJson);
      let getLastViewedArr = [].push(newJson);
      expect(localStorage.getItem(jsonId)).toEqual(
        JSON.stringify(getLastViewedArr)
      );
    });
  })

  describe("Recently Viewed", () => {
    function setItem(jsonId, newValue){
      let lastViewedArr = [].push(newValue)
      window.localStorage.setItem(jsonId, JSON.stringify(lastViewedArr));
    }
    const localStorageMock = (function() {
      let store = {};
    
      
      return {
        getItem(key) {
          return store[key];
        },
     
        setItem(key, value) {
          store[key] = value;
        },
      
        clear() {
          store = {};
        },
    
        removeItem(key) {
          delete store[key];
        },
         
        getAll() {
          console.log(store);
        }
      };
    })();

  
    beforeEach(() => {
      Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    });

    it("Recently Viewed Component doesnt have posts to be rendered", () => {
      render(<LastViewed posts={[]} />);
    });
    
    it("Recently Viewed Component doesnt have posts to be rendered", async () => {
      const posts = await getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
      ]);
      render(<LastViewed posts={posts} />);
    });
    
  });