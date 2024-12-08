"use client"
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
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMegaMenu.module.css';
import { MediaQuery } from '@mantine/core';
import logo from '@/components/Shared/Navbar/logo.png';
import Image from 'next/image';
import Link from 'next/link';


export default function HeaderMegaMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    return (
        <Box pb={30}>
            <header className={`${classes.header} bg-gray-500 py-8`}>
                <Group className='container mx-auto px-4' position="apart" sx={{ height: '100%' }}>
                    <Image src={logo} alt="Logo" width={100} height={50} />

                    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                        <Group className='gap-5' sx={{ height: '100%' }} spacing={0}>
                            <Link href="#" className={classes.link}>
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
                title="Navigation"
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
        </Box>
    );
}