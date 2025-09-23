import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { Mail, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import logoImage from "@/assets/ufo-burger-logo.jpg";
import axios from "axios";

const ForgotPassword = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<'phone' | 'otp' | 'password'>('phone');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate OTP sending
    const OTP = Math.ceil(Math.random()*1000000)
    const endPoint ="https://api.mnotify.com/api/sms/quick"
    const apiKey = "rOeg7YvLkfTIUevzAKFLD31Y9"
    const url = endPoint+ "?key=" +apiKey

    const data = {
        recipient: [phoneNumber],
        sender: 'mNotify',
        message: 'Your password reset OTP' + OTP,
        is_schedule: false,
        schedule_date: '',
        sms_type: 'otp' // please do not include in payload when the perpose of the blast is not for otp
      };
    const response = await axios.post("/add-otp",{phoneNumber,OTP})
    const messageResponse = await axios.post(url,data, { headers:{"Content-Type":"application.json"}})
    if(response.data.success&& messageResponse.data.message=="message sent successfully"){

      setTimeout(() => {
        toast({
          title: "🛸 OTP Sent!",
          description: "Check your phone for the reset OTP.",
        });
        setIsLoading(false);
        setStep('otp');
      }, 1500);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate OTP verification
    setTimeout(() => {
      toast({
        title: "OTP Verified!",
        description: "Please enter your new password.",
      });
      setIsLoading(false);
      setStep('password');
    }, 1000);
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate password reset
    setTimeout(() => {
      toast({
        title: "🎉 Password Reset Successful!",
        description: "Your password has been updated. Please login with your new password.",
      });
      setIsLoading(false);
      navigate('/login');
    }, 1500);
  };

  const handleResendOtp = () => {
    setIsLoading(true);
    setTimeout(() => {
      toast({
        title: "OTP Resent",
        description: "Another OTP has been sent to your phone.",
      });
      setIsLoading(false);
    }, 1000);
  };

  // OTP Input Step
  if (step === 'otp') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <img
                src={logoImage}
                alt="UFO Burgers Logo"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <CardTitle className="text-2xl font-heading">
              Enter <span className="text-gradient">OTP</span>
            </CardTitle>
            <p className="text-muted-foreground">
              We've sent a 6-digit OTP to {phoneNumber}
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="otp">Enter OTP</Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 btn-glow"
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Verify OTP"}
              </Button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Didn't receive the OTP?
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleResendOtp}
                disabled={isLoading}
              >
                {isLoading ? "Resending..." : "Resend OTP"}
              </Button>
            </div>

            <div className="mt-6 flex gap-2">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setStep('phone')}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => navigate('/')}
              >
                Go Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // New Password Step
  if (step === 'password') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <img
                src={logoImage}
                alt="UFO Burgers Logo"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <CardTitle className="text-2xl font-heading">
              Set New <span className="text-gradient">Password</span>
            </CardTitle>
            <p className="text-muted-foreground">
              Enter your new password to complete the reset process.
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 btn-glow"
                disabled={isLoading}
              >
                {isLoading ? "Updating Password..." : "Update Password"}
              </Button>
            </form>

            <div className="mt-6 flex gap-2">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setStep('otp')}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => navigate('/')}
              >
                Go Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Phone Number Input Step (Initial)
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <img
              src={logoImage}
              alt="UFO Burgers Logo"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <CardTitle className="text-2xl font-heading">
            Forgot Your <span className="text-gradient">Password?</span>
          </CardTitle>
          <p className="text-muted-foreground">
            No worries! Enter your phone number and we'll send you an OTP.
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 btn-glow"
              disabled={isLoading}
            >
              {isLoading ? (
                "Sending..."
              ) : (
                <>
                  <Mail className="mr-2 h-4 w-4" />
                  Send Reset OTP
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 flex gap-2">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => navigate('/login')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Login
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => navigate('/signup')}
            >
              Create Account
            </Button>
          </div>

          <div className="mt-4 text-center">
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;