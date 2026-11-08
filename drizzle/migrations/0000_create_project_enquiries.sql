CREATE TABLE public.project_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  project_location text NOT NULL,
  property_type text NOT NULL,
  approximate_area text,
  possession_status text,
  expected_timeline text NOT NULL,
  interior_requirement text NOT NULL,
  project_category text NOT NULL,
  scope_of_work text NOT NULL,
  preferred_design_style text,
  approximate_budget text,
  project_description text,
  status text NOT NULL DEFAULT 'new'
);
GRANT INSERT ON public.project_enquiries TO anon;
GRANT ALL ON public.project_enquiries TO service_role;
ALTER TABLE public.project_enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors can submit project enquiries"
  ON public.project_enquiries
  FOR INSERT
  TO anon
  WITH CHECK (
    char_length(trim(full_name)) BETWEEN 2 AND 100
    AND char_length(trim(email)) BETWEEN 3 AND 255
    AND char_length(trim(phone)) BETWEEN 7 AND 20
    AND char_length(trim(project_location)) BETWEEN 2 AND 160
    AND char_length(trim(property_type)) BETWEEN 1 AND 80
    AND char_length(trim(expected_timeline)) BETWEEN 1 AND 80
    AND char_length(trim(interior_requirement)) BETWEEN 1 AND 120
    AND char_length(trim(project_category)) BETWEEN 1 AND 80
    AND char_length(trim(scope_of_work)) BETWEEN 1 AND 120
    AND (approximate_area IS NULL OR char_length(approximate_area) <= 80)
    AND (possession_status IS NULL OR char_length(possession_status) <= 80)
    AND (preferred_design_style IS NULL OR char_length(preferred_design_style) <= 120)
    AND (approximate_budget IS NULL OR char_length(approximate_budget) <= 80)
    AND (project_description IS NULL OR char_length(project_description) <= 2000)
    AND status = 'new'
  );