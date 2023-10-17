import express from "express";
import cors from "cors";

import OnboardingRoutes from "./src/Servlets/OnboardingServlet.js";
import SignupRoutes from "./src/Servlets/SignupServlet.js";
import CommonRoutes from "./src/Servlets/CommonServlet.js";
import ExpenseRoutes from "./src/Servlets/expenseserveletnew.js";
import PaymentRoutes from "./src/Servlets/PaymentServlet.js";
import AccountsRoutes from "./src/Servlets/AccountModuleServlet.js";
import { subscriptionPlanDetails } from "./src/Controllers/SubscriptionController.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const port = 9000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Define your routes and middleware here

app.use(express.json());

//Signup
app.use("/SignupRoutes", SignupRoutes);

//Expenses
app.use("/expense", ExpenseRoutes);

//Onboarding
app.use("/OnboardingRoutes", OnboardingRoutes);

//Common
app.use("/CommonRoutes", CommonRoutes);

//Payment
app.use("/PaymentRoutes", PaymentRoutes);

//accounts
app.use("/AccountsRoutes", AccountsRoutes);

//Subscription
app.get("/listSubscriptionPlanDetails", subscriptionPlanDetails);

module.exports = app;
