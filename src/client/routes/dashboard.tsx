import {
  Activity,
  ArrowUpRight,
  Bell,
  CircleUser,
  CreditCard,
  DollarSign,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Input } from "../components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import React from "react";
import { ModeToggle } from "../components/mode-toggle";
import { useAuth } from "../components/AuthContext";

export function Dashboard() {
  // const navigate = useNavigate();
  const { logoutUser } = useAuth();

  return (
    <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
      <div className='hidden border-r bg-muted/40 md:block'>
        <div className='flex h-full max-h-screen flex-col gap-2'>
          <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
            <a href='/' className='flex items-center gap-2 font-semibold'>
              <Package2 className='h-6 w-6' />
              <span className=''>Acme Inc</span>
            </a>
            <Button variant='outline' size='icon' className='ml-auto h-8 w-8'>
              <Bell className='h-4 w-4' />
              <span className='sr-only'>Toggle notifications</span>
            </Button>
          </div>
          <div className='flex-1'>
            <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
              <a
                href='/'
                className='flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary'
              >
                <Home className='h-4 w-4' />
                Dashboard
              </a>
              <a
                href='/orders'
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
              >
                <ShoppingCart className='h-4 w-4' />
                Orders
                <Badge className='ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>
                  6
                </Badge>
              </a>
              <a
                href='/products'
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
              >
                <Package className='h-4 w-4' />
                Products{" "}
              </a>
              <a
                href='/customers'
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
              >
                <Users className='h-4 w-4' />
                Customers
              </a>
              <a
                href='/analytics'
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
              >
                <LineChart className='h-4 w-4' />
                Analytics
              </a>
            </nav>
          </div>
          <div className='mt-auto p-4'>
            <Card x-chunk='dashboard-02-chunk-0'>
              <CardHeader className='p-2 pt-0 md:p-4'>
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className='p-2 pt-0 md:p-4 md:pt-0'>
                <Button size='sm' className='w-full'>
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <header className='flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6'>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant='outline'
                size='icon'
                className='shrink-0 md:hidden'
              >
                <Menu className='h-5 w-5' />
                <span className='sr-only'>Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='flex flex-col'>
              <nav className='grid gap-2 text-lg font-medium'>
                <a
                  href='/'
                  className='flex items-center gap-2 text-lg font-semibold'
                >
                  <Package2 className='h-6 w-6' />
                  <span className='sr-only'>Acme Inc</span>
                </a>
                <a
                  href='/'
                  className='mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground'
                >
                  <Home className='h-5 w-5' />
                  Dashboard
                </a>
                <a
                  href='/orders'
                  className='mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground'
                >
                  <ShoppingCart className='h-5 w-5' />
                  Orders
                  <Badge className='ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>
                    6
                  </Badge>
                </a>
                <a
                  href='/products'
                  className='mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground'
                >
                  <Package className='h-5 w-5' />
                  Products
                </a>
                <a
                  href='/customers'
                  className='mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground'
                >
                  <Users className='h-5 w-5' />
                  Customers
                </a>
                <a
                  href='/analytics'
                  className='mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground'
                >
                  <LineChart className='h-5 w-5' />
                  Analytics
                </a>
              </nav>
              <div className='mt-auto'>
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size='sm' className='w-full'>
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <Breadcrumb className='hidden md:flex'>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={"/"}>Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={"/"}>Products</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>All Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className='w-full flex-1'>
            <form>
              <div className='relative'>
                <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
                <Input
                  type='search'
                  placeholder='Search products...'
                  className='w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3'
                />
              </div>
            </form>
          </div>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='secondary' size='icon' className='rounded-full'>
                <CircleUser className='h-5 w-5' />
                <span className='sr-only'>Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div onClick={logoutUser}>Logout</div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
          <div className='flex items-center'>
            <h1 className='text-lg font-semibold md:text-2xl'>Dashboard</h1>
          </div>
          <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
            <Card x-chunk='dashboard-01-chunk-0'>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Total Revenue
                </CardTitle>
                <DollarSign className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>$45,231.89</div>
                <p className='text-xs text-muted-foreground'>
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card x-chunk='dashboard-01-chunk-1'>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Subscriptions
                </CardTitle>
                <Users className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>+2350</div>
                <p className='text-xs text-muted-foreground'>
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card x-chunk='dashboard-01-chunk-2'>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>Sales</CardTitle>
                <CreditCard className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>+12,234</div>
                <p className='text-xs text-muted-foreground'>
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            <Card x-chunk='dashboard-01-chunk-3'>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Active Now
                </CardTitle>
                <Activity className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>+573</div>
                <p className='text-xs text-muted-foreground'>
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>
          <div className='grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3'>
            <Card className='xl:col-span-2' x-chunk='dashboard-01-chunk-4'>
              <CardHeader className='flex flex-row items-center'>
                <div className='grid gap-2'>
                  <CardTitle>Transactions</CardTitle>
                  <CardDescription>
                    Recent transactions from your store.
                  </CardDescription>
                </div>
                <Button asChild size='sm' className='ml-auto gap-1'>
                  <Link to={'/transactions'}>
                    View All
                    <ArrowUpRight className='h-4 w-4' />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead className='hidden xl:table-column'>
                        Type
                      </TableHead>
                      <TableHead className='hidden xl:table-column'>
                        Status
                      </TableHead>
                      <TableHead className='hidden xl:table-column'>
                        Date
                      </TableHead>
                      <TableHead className='text-right'>Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className='font-medium'>Liam Johnson</div>
                        <div className='hidden text-sm text-muted-foreground md:inline'>
                          liam@example.com
                        </div>
                      </TableCell>
                      <TableCell className='hidden xl:table-column'>
                        Sale
                      </TableCell>
                      <TableCell className='hidden xl:table-column'>
                        <Badge className='text-xs' variant='outline'>
                          Approved
                        </Badge>
                      </TableCell>
                      <TableCell className='hidden md:table-cell lg:hidden xl:table-column'>
                        2023-06-23
                      </TableCell>
                      <TableCell className='text-right'>$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className='font-medium'>Olivia Smith</div>
                        <div className='hidden text-sm text-muted-foreground md:inline'>
                          olivia@example.com
                        </div>
                      </TableCell>
                      <TableCell className='hidden xl:table-column'>
                        Refund
                      </TableCell>
                      <TableCell className='hidden xl:table-column'>
                        <Badge className='text-xs' variant='outline'>
                          Declined
                        </Badge>
                      </TableCell>
                      <TableCell className='hidden md:table-cell lg:hidden xl:table-column'>
                        2023-06-24
                      </TableCell>
                      <TableCell className='text-right'>$150.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className='font-medium'>Noah Williams</div>
                        <div className='hidden text-sm text-muted-foreground md:inline'>
                          noah@example.com
                        </div>
                      </TableCell>
                      <TableCell className='hidden xl:table-column'>
                        Subscription
                      </TableCell>
                      <TableCell className='hidden xl:table-column'>
                        <Badge className='text-xs' variant='outline'>
                          Approved
                        </Badge>
                      </TableCell>
                      <TableCell className='hidden md:table-cell lg:hidden xl:table-column'>
                        2023-06-25
                      </TableCell>
                      <TableCell className='text-right'>$350.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className='font-medium'>Emma Brown</div>
                        <div className='hidden text-sm text-muted-foreground md:inline'>
                          emma@example.com
                        </div>
                      </TableCell>
                      <TableCell className='hidden xl:table-column'>
                        Sale
                      </TableCell>
                      <TableCell className='hidden xl:table-column'>
                        <Badge className='text-xs' variant='outline'>
                          Approved
                        </Badge>
                      </TableCell>
                      <TableCell className='hidden md:table-cell lg:hidden xl:table-column'>
                        2023-06-26
                      </TableCell>
                      <TableCell className='text-right'>$450.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className='font-medium'>Liam Johnson</div>
                        <div className='hidden text-sm text-muted-foreground md:inline'>
                          liam@example.com
                        </div>
                      </TableCell>
                      <TableCell className='hidden xl:table-column'>
                        Sale
                      </TableCell>
                      <TableCell className='hidden xl:table-column'>
                        <Badge className='text-xs' variant='outline'>
                          Approved
                        </Badge>
                      </TableCell>
                      <TableCell className='hidden md:table-cell lg:hidden xl:table-column'>
                        2023-06-27
                      </TableCell>
                      <TableCell className='text-right'>$550.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card x-chunk='dashboard-01-chunk-5'>
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
              </CardHeader>
              <CardContent className='grid gap-8'>
                <div className='flex items-center gap-4'>
                  <Avatar className='hidden h-9 w-9 sm:flex'>
                    <AvatarImage src='/avatars/01.png' alt='Avatar' />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                  <div className='grid gap-1'>
                    <p className='text-sm font-medium leading-none'>
                      Olivia Martin
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      olivia.martin@email.com
                    </p>
                  </div>
                  <div className='ml-auto font-medium'>+$1,999.00</div>
                </div>
                <div className='flex items-center gap-4'>
                  <Avatar className='hidden h-9 w-9 sm:flex'>
                    <AvatarImage src='/avatars/02.png' alt='Avatar' />
                    <AvatarFallback>JL</AvatarFallback>
                  </Avatar>
                  <div className='grid gap-1'>
                    <p className='text-sm font-medium leading-none'>
                      Jackson Lee
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      jackson.lee@email.com
                    </p>
                  </div>
                  <div className='ml-auto font-medium'>+$39.00</div>
                </div>
                <div className='flex items-center gap-4'>
                  <Avatar className='hidden h-9 w-9 sm:flex'>
                    <AvatarImage src='/avatars/03.png' alt='Avatar' />
                    <AvatarFallback>IN</AvatarFallback>
                  </Avatar>
                  <div className='grid gap-1'>
                    <p className='text-sm font-medium leading-none'>
                      Isabella Nguyen
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      isabella.nguyen@email.com
                    </p>
                  </div>
                  <div className='ml-auto font-medium'>+$299.00</div>
                </div>
                <div className='flex items-center gap-4'>
                  <Avatar className='hidden h-9 w-9 sm:flex'>
                    <AvatarImage src='/avatars/04.png' alt='Avatar' />
                    <AvatarFallback>WK</AvatarFallback>
                  </Avatar>
                  <div className='grid gap-1'>
                    <p className='text-sm font-medium leading-none'>
                      William Kim
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      will@email.com
                    </p>
                  </div>
                  <div className='ml-auto font-medium'>+$99.00</div>
                </div>
                <div className='flex items-center gap-4'>
                  <Avatar className='hidden h-9 w-9 sm:flex'>
                    <AvatarImage src='/avatars/05.png' alt='Avatar' />
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                  <div className='grid gap-1'>
                    <p className='text-sm font-medium leading-none'>
                      Sofia Davis
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      sofia.davis@email.com
                    </p>
                  </div>
                  <div className='ml-auto font-medium'>+$39.00</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
