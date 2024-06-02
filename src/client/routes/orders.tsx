import {
  Activity,
  ArrowUpRight,
  Bell,
  ChevronLeft,
  ChevronRight,
  CircleUser,
  Copy,
  CreditCard,
  DollarSign,
  File,
  Home,
  LineChart,
  ListFilter,
  Menu,
  MoreVertical,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  DropdownMenuCheckboxItem,
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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../components/ui/pagination";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Progress } from "../components/ui/progress";
import { Separator } from "../components/ui/separator";
import { Input } from "../components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { ModeToggle } from "../components/mode-toggle";
import { useAuth } from "../components/AuthContext";

export function Orders() {
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
        {/* <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3'> */}
        <main className='grid flex-1 flex-col items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:gap-6 lg:p-6 lg:grid-cols-3 xl:grid-cols-3'>
          <div className='grid auto-rows-max items-start gap-4  md:gap-8 lg:col-span-2'>
            <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4'>
              <Card className='sm:col-span-2' x-chunk='dashboard-05-chunk-0'>
                <CardHeader className='pb-3'>
                  <CardTitle>Your Orders</CardTitle>
                  <CardDescription className='max-w-lg text-balance leading-relaxed'>
                    Introducing Our Dynamic Orders Dashboard for Seamless
                    Management and Insightful Analysis.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button>Create New Order</Button>
                </CardFooter>
              </Card>
              <Card x-chunk='dashboard-05-chunk-1'>
                <CardHeader className='pb-2'>
                  <CardDescription>This Week</CardDescription>
                  <CardTitle className='text-4xl'>$1,329</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='text-xs text-muted-foreground'>
                    +25% from last week
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress value={25} aria-label='25% increase' />
                </CardFooter>
              </Card>
              <Card x-chunk='dashboard-05-chunk-2'>
                <CardHeader className='pb-2'>
                  <CardDescription>This Month</CardDescription>
                  <CardTitle className='text-4xl'>$5,329</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='text-xs text-muted-foreground'>
                    +10% from last month
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress value={12} aria-label='12% increase' />
                </CardFooter>
              </Card>
            </div>
            <Tabs defaultValue='week'>
              <div className='flex items-center'>
                <TabsList>
                  <TabsTrigger value='week'>Week</TabsTrigger>
                  <TabsTrigger value='month'>Month</TabsTrigger>
                  <TabsTrigger value='year'>Year</TabsTrigger>
                </TabsList>
                <div className='ml-auto flex items-center gap-2'>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant='outline'
                        size='sm'
                        className='h-7 gap-1 text-sm'
                      >
                        <ListFilter className='h-3.5 w-3.5' />
                        <span className='sr-only sm:not-sr-only'>Filter</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Fulfilled
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Declined
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Refunded
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button
                    size='sm'
                    variant='outline'
                    className='h-7 gap-1 text-sm'
                  >
                    <File className='h-3.5 w-3.5' />
                    <span className='sr-only sm:not-sr-only'>Export</span>
                  </Button>
                </div>
              </div>
              <TabsContent value='week'>
                <Card x-chunk='dashboard-05-chunk-3'>
                  <CardHeader className='px-7'>
                    <CardTitle>Orders</CardTitle>
                    <CardDescription>
                      Recent orders from your store.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Customer</TableHead>
                          <TableHead className='hidden sm:table-cell'>
                            Type
                          </TableHead>
                          <TableHead className='hidden sm:table-cell'>
                            Status
                          </TableHead>
                          <TableHead className='hidden md:table-cell'>
                            Date
                          </TableHead>
                          <TableHead className='text-right'>Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className='bg-accent'>
                          <TableCell>
                            <div className='font-medium'>Liam Johnson</div>
                            <div className='hidden text-sm text-muted-foreground md:inline'>
                              liam@example.com
                            </div>
                          </TableCell>
                          <TableCell className='hidden sm:table-cell'>
                            Sale
                          </TableCell>
                          <TableCell className='hidden sm:table-cell'>
                            <Badge className='text-xs' variant='secondary'>
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className='hidden md:table-cell'>
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
                          <TableCell className='hidden sm:table-cell'>
                            Refund
                          </TableCell>
                          <TableCell className='hidden sm:table-cell'>
                            <Badge className='text-xs' variant='outline'>
                              Declined
                            </Badge>
                          </TableCell>
                          <TableCell className='hidden md:table-cell'>
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
                          <TableCell className='hidden sm:table-cell'>
                            Subscription
                          </TableCell>
                          <TableCell className='hidden sm:table-cell'>
                            <Badge className='text-xs' variant='secondary'>
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className='hidden md:table-cell'>
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
                          <TableCell className='hidden sm:table-cell'>
                            Sale
                          </TableCell>
                          <TableCell className='hidden sm:table-cell'>
                            <Badge className='text-xs' variant='secondary'>
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className='hidden md:table-cell'>
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
                          <TableCell className='hidden sm:table-cell'>
                            Sale
                          </TableCell>
                          <TableCell className='hidden sm:table-cell'>
                            <Badge className='text-xs' variant='secondary'>
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className='hidden md:table-cell'>
                            2023-06-23
                          </TableCell>
                          <TableCell className='text-right'>$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className='font-medium'>Liam Johnson</div>
                            <div className='hidden text-sm text-muted-foreground md:inline'>
                              liam@example.com
                            </div>
                          </TableCell>
                          <TableCell className='hidden sm:table-cell'>
                            Sale
                          </TableCell>
                          <TableCell className='hidden sm:table-cell'>
                            <Badge className='text-xs' variant='secondary'>
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className='hidden md:table-cell'>
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
                          <TableCell className='hidden sm:table-cell'>
                            Refund
                          </TableCell>
                          <TableCell className='hidden sm:table-cell'>
                            <Badge className='text-xs' variant='outline'>
                              Declined
                            </Badge>
                          </TableCell>
                          <TableCell className='hidden md:table-cell'>
                            2023-06-24
                          </TableCell>
                          <TableCell className='text-right'>$150.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className='font-medium'>Emma Brown</div>
                            <div className='hidden text-sm text-muted-foreground md:inline'>
                              emma@example.com
                            </div>
                          </TableCell>
                          <TableCell className='hidden sm:table-cell'>
                            Sale
                          </TableCell>
                          <TableCell className='hidden sm:table-cell'>
                            <Badge className='text-xs' variant='secondary'>
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className='hidden md:table-cell'>
                            2023-06-26
                          </TableCell>
                          <TableCell className='text-right'>$450.00</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <Card className='overflow-hidden' x-chunk='dashboard-05-chunk-4'>
              <CardHeader className='flex flex-row items-start bg-muted/50'>
                <div className='grid gap-0.5'>
                  <CardTitle className='group flex items-center gap-2 text-lg'>
                    Order Oe31b70H
                    <Button
                      size='icon'
                      variant='outline'
                      className='h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100'
                    >
                      <Copy className='h-3 w-3' />
                      <span className='sr-only'>Copy Order ID</span>
                    </Button>
                  </CardTitle>
                  <CardDescription>Date: November 23, 2023</CardDescription>
                </div>
                <div className='ml-auto flex items-center gap-1'>
                  <Button size='sm' variant='outline' className='h-8 gap-1'>
                    <Truck className='h-3.5 w-3.5' />
                    <span className='lg:sr-only xl:not-sr-only xl:whitespace-nowrap'>
                      Track Order
                    </span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size='icon' variant='outline' className='h-8 w-8'>
                        <MoreVertical className='h-3.5 w-3.5' />
                        <span className='sr-only'>More</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Export</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Trash</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className='p-6 text-sm'>
                <div className='grid gap-3'>
                  <div className='font-semibold'>Order Details</div>
                  <ul className='grid gap-3'>
                    <li className='flex items-center justify-between'>
                      <span className='text-muted-foreground'>
                        Glimmer Lamps x <span>2</span>
                      </span>
                      <span>$250.00</span>
                    </li>
                    <li className='flex items-center justify-between'>
                      <span className='text-muted-foreground'>
                        Aqua Filters x <span>1</span>
                      </span>
                      <span>$49.00</span>
                    </li>
                  </ul>
                  <Separator className='my-2' />
                  <ul className='grid gap-3'>
                    <li className='flex items-center justify-between'>
                      <span className='text-muted-foreground'>Subtotal</span>
                      <span>$299.00</span>
                    </li>
                    <li className='flex items-center justify-between'>
                      <span className='text-muted-foreground'>Shipping</span>
                      <span>$5.00</span>
                    </li>
                    <li className='flex items-center justify-between'>
                      <span className='text-muted-foreground'>Tax</span>
                      <span>$25.00</span>
                    </li>
                    <li className='flex items-center justify-between font-semibold'>
                      <span className='text-muted-foreground'>Total</span>
                      <span>$329.00</span>
                    </li>
                  </ul>
                </div>
                <Separator className='my-4' />
                <div className='grid grid-cols-2 gap-4'>
                  <div className='grid gap-3'>
                    <div className='font-semibold'>Shipping Information</div>
                    <address className='grid gap-0.5 not-italic text-muted-foreground'>
                      <span>Liam Johnson</span>
                      <span>1234 Main St.</span>
                      <span>Anytown, CA 12345</span>
                    </address>
                  </div>
                  <div className='grid auto-rows-max gap-3'>
                    <div className='font-semibold'>Billing Information</div>
                    <div className='text-muted-foreground'>
                      Same as shipping address
                    </div>
                  </div>
                </div>
                <Separator className='my-4' />
                <div className='grid gap-3'>
                  <div className='font-semibold'>Customer Information</div>
                  <dl className='grid gap-3'>
                    <div className='flex items-center justify-between'>
                      <dt className='text-muted-foreground'>Customer</dt>
                      <dd>Liam Johnson</dd>
                    </div>
                    <div className='flex items-center justify-between'>
                      <dt className='text-muted-foreground'>Email</dt>
                      <dd>
                        <a href='mailto:'>liam@acme.com</a>
                      </dd>
                    </div>
                    <div className='flex items-center justify-between'>
                      <dt className='text-muted-foreground'>Phone</dt>
                      <dd>
                        <a href='tel:'>+1 234 567 890</a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <Separator className='my-4' />
                <div className='grid gap-3'>
                  <div className='font-semibold'>Payment Information</div>
                  <dl className='grid gap-3'>
                    <div className='flex items-center justify-between'>
                      <dt className='flex items-center gap-1 text-muted-foreground'>
                        <CreditCard className='h-4 w-4' />
                        Visa
                      </dt>
                      <dd>**** **** **** 4532</dd>
                    </div>
                  </dl>
                </div>
              </CardContent>
              <CardFooter className='flex flex-row items-center border-t bg-muted/50 px-6 py-3'>
                <div className='text-xs text-muted-foreground'>
                  Updated <time dateTime='2023-11-23'>November 23, 2023</time>
                </div>
                <Pagination className='ml-auto mr-0 w-auto'>
                  <PaginationContent>
                    <PaginationItem>
                      <Button size='icon' variant='outline' className='h-6 w-6'>
                        <ChevronLeft className='h-3.5 w-3.5' />
                        <span className='sr-only'>Previous Order</span>
                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button size='icon' variant='outline' className='h-6 w-6'>
                        <ChevronRight className='h-3.5 w-3.5' />
                        <span className='sr-only'>Next Order</span>
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
