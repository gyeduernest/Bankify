import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig'; // Import the initialized Firebase instance
import Logout from '../assets/Logout.svg';

const Signout: React.FC = () => {
  
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(() => {
      setLoading(false); // Set loading to false once the authentication state is checked
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log('User signed out successfully.');
      navigate('/');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error signing out:', error.message);
      } else {
        console.error('Unknown error signing out:', error);
      }
    }
  };

  // If still loading, you can show a loading indicator or null
  if (loading) {
    return null; // or loading indicator
  }
  return (
    <>
        <Button className=''  variant={"outline"}   onClick={handleLogout} >
                  <img src={Logout} alt="" />
                  <p className='text-red-500 text-xs hidden sm:hidden md:hidden lg:block'> Sign out</p>
          </Button>
    
    </>
  );
};

export default Signout;
