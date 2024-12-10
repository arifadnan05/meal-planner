"use client"
// import { IconZoom } from '@tabler/icons-react';
// import {
//     Box,
//     Burger,
//     Button,
//     Center,
//     Divider,
//     Drawer,
//     Group,
//     HoverCard,
//     ScrollArea,
// } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
// import classes from './HeaderMegaMenu.module.css';
// import { MediaQuery } from '@mantine/core';
// import logo from '@/components/Shared/Navbar/logo.png';
// import Image from 'next/image';
// import Link from 'next/link';


// export default function HeaderMegaMenu() {
//     const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
//     return (
//         <Box >
//             <header className={`${classes.header} bg-[#16B97A] py-8`}>
//                 <Group className='container mx-auto px-4' position="apart" sx={{ height: '100%' }}>
//                     <Image src={logo} alt="Logo" width={100} height={50} />

//                     <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
//                         <Group className='gap-5' sx={{ height: '100%' }} spacing={0}>
//                             <Link href="#" className={`${classes.link}`}>
//                                 Home
//                             </Link>
//                             <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
//                                 <HoverCard.Target>
//                                     <Link href="#" className={classes.link}>
//                                         <Center inline>
//                                             <Box component="span" mr={5}>
//                                                 Recipes
//                                             </Box>
//                                         </Center>
//                                     </Link>
//                                 </HoverCard.Target>


//                             </HoverCard>

//                             <Link href="#" className={classes.link}>
//                                 Meal Planner
//                             </Link>
//                             <Link href="#" className={classes.link}>
//                                 Shopping List
//                             </Link>
//                         </Group>
//                     </MediaQuery>
//                     <div className='ml-64'>
//                         <span className='cursor-pointer'><IconZoom stroke={3} /></span>
//                     </div>
//                     <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
//                         <Group>
//                             <Button variant="default">Log in</Button>
//                         </Group>
//                     </MediaQuery>

//                     <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
//                         <Burger opened={drawerOpened} onClick={toggleDrawer} />
//                     </MediaQuery>
//                 </Group>
//             </header>

//             <Drawer
//                 opened={drawerOpened}
//                 onClose={closeDrawer}
//                 size="80%"
//                 padding="xl"
//                 title="Meal Planner"
//                 zIndex={1000000}
//             >
//                 <ScrollArea h="calc(100vh - 80px)" mx="-md">
//                     <Divider my="sm" />

//                     <Link href="#" className={classes.link}>
//                         Home
//                     </Link>
//                     <Link href="#" className={classes.link}>
//                         Recipes
//                     </Link>
//                     <Link href="#" className={classes.link}>
//                         Meal Planner
//                     </Link>
//                     <Link href="#" className={classes.link}>
//                         Shopping List
//                     </Link>

//                     <Divider my="sm" />

//                     <Group position="center" grow pb="xl" px="md">
//                         <Button variant="default">Log in</Button>
//                     </Group>
//                 </ScrollArea>
//             </Drawer>
//         </Box>
//     );
// }

"use client"
import { IconZoom } from '@tabler/icons-react';
import {
    Box,
    Burger,
    Button,
    Center,
    Divider,
    Drawer,
    Group,
    HoverCard,
    ScrollArea,
    TextInput,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMegaMenu.module.css';
import { MediaQuery } from '@mantine/core';
import logo from '@/components/Shared/Navbar/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function HeaderMegaMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [searchOpened, { toggle: toggleSearch, close: closeSearch }] = useDisclosure(false);

    return (
        <Box>
            <header className={`${classes.header} bg-[#F9F2E6] py-8`}>
                <Group className='container mx-auto px-4' position="apart" sx={{ height: '100%' }}>
                    <Image src={logo} alt="Logo" width={100} height={50} />

                    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                        <Group className='gap-5' sx={{ height: '100%' }} spacing={0}>
                            <Link href="/" className={classes.link}>
                                Home
                            </Link>
                            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                                <HoverCard.Target>
                                    <Link href="#" className={classes.link}>
                                        <Center inline>
                                            <Box component="span" mr={5}>
                                                Recipes
                                            </Box>
                                        </Center>
                                    </Link>
                                </HoverCard.Target>
                            </HoverCard>

                            <Link href="#" className={classes.link}>
                                Meal Planner
                            </Link>
                            <Link href="#" className={classes.link}>
                                Shopping List
                            </Link>
                        </Group>
                    </MediaQuery>

                    <div className='ml-64 cursor-pointer' onClick={toggleSearch}>
                        <IconZoom stroke={3} />
                    </div>

                    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                        <Group>
                            <Button variant="default">Log in</Button>
                        </Group>
                    </MediaQuery>

                    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                        <Burger opened={drawerOpened} onClick={toggleDrawer} />
                    </MediaQuery>
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="80%"
                padding="xl"
                title="Meal Planner"
                zIndex={1000000}
            >
                <ScrollArea h="calc(100vh - 80px)" mx="-md">
                    <Divider my="sm" />

                    <Link href="#" className={classes.link}>
                        Home
                    </Link>
                    <Link href="#" className={classes.link}>
                        Recipes
                    </Link>
                    <Link href="#" className={classes.link}>
                        Meal Planner
                    </Link>
                    <Link href="#" className={classes.link}>
                        Shopping List
                    </Link>

                    <Divider my="sm" />

                    <Group position="center" grow pb="xl" px="md">
                        <Button variant="default">Log in</Button>
                    </Group>
                </ScrollArea>
            </Drawer>

            {searchOpened && (
                <div className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
                    <Box className="bg-white p-8 rounded-xl w-full max-w-xl shadow-2xl relative">
                        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                            Search Anything
                        </h2>

                        <div className="flex flex-col md:flex-row gap-4">
                            <TextInput
                                placeholder="Type to search..."
                                size="lg"
                                className="w-full border-gray-300 rounded-lg focus:border-[#16B97A] focus:ring-[#16B97A]"
                            />
                            <Button
                                className="bg-[#16B97A] hover:bg-[#139f68] text-white px-8 py-3 rounded-lg font-semibold transition-all"
                            >
                                Search
                            </Button>
                        </div>

                        <Button
                            className="absolute top-4 bg-slate-800  right-4 text-white hover:text-red-600 text-lg font-semibold"
                            onClick={closeSearch}
                        >
                            ✕
                        </Button>
                    </Box>
                </div>
            )}


        </Box>
    );
}
