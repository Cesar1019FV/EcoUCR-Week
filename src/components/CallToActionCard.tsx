import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface CallToActionCardProps {
  title: string;
  description?: string;
  linkUrl: string;
  linkText: string;
  icon?: React.ElementType;
  className?: string;
}

export default function CallToActionCard({ title, description, linkUrl, linkText, icon: Icon, className }: CallToActionCardProps) {
  return (
    <Card className={`flex flex-col items-center justify-center text-center p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <CardHeader className="pb-4">
        {Icon && <Icon className="h-12 w-12 text-primary mb-4 mx-auto" />}
        <CardTitle className="text-2xl font-bold text-primary">{title}</CardTitle>
      </CardHeader>
      {description && (
        <CardContent className="pb-6">
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      )}
      <Button asChild size="lg" className="group">
        <Link href={linkUrl}>
          {linkText}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </Card>
  );
}
